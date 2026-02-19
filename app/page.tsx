'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'

type Pointer = {
  x: number
  y: number
}

const painPoints = [
  'บันทึกเวลาไม่ตรงจริง',
  'ตามสถานะลายาก',
  'คำนวณ OT ผิดบ่อย',
  'ทำเงินเดือนช้า',
  'ขาด Dashboard ทันที',
]

const quickCoverage = [
  'Check in-out ผ่าน LINE OA',
  'ยื่นลาและอนุมัติทันที',
  'จัดการ OT จากข้อมูลจริง',
  'รายงานเวลาแบบเรียลไทม์',
]

const featureRows = [
  {
    title: 'Check in-out อัจฉริยะ',
    detail: 'บันทึกเวลา + พิกัด + อุปกรณ์ แบบอัตโนมัติทั้ง LINE OA, LIFF และ Mini App',
  },
  {
    title: 'Leave Workflow ครบวงจร',
    detail: 'พนักงานยื่นลา หัวหน้าอนุมัติ และทีม HR ตรวจสอบย้อนหลังได้จากไทม์ไลน์เดียว',
  },
  {
    title: 'Overtime Calculation แม่นยำ',
    detail: 'คำนวณ OT ตามกะงานจริง ลดงานมือและลดข้อโต้แย้งเรื่องชั่วโมงทำงาน',
  },
  {
    title: 'Payroll + Dashboard',
    detail: 'รวมเวลาเข้างาน ลา และ OT เพื่อสรุปเงินเดือน พร้อมแสดงผลบน Dashboard สำหรับผู้บริหาร',
  },
]

const smartRecordPoints = [
  'เก็บเหตุการณ์แบบ timestamp ต่อเนื่องทุกขั้นตอน',
  'ตรวจจับข้อมูลผิดปกติ เช่น ขาดเวลา, มาสาย, เข้าซ้ำ',
  'สรุปผลรายวัน รายสัปดาห์ และรายเดือนทันที',
  'พร้อมนำข้อมูลไปทำรายงานบริหารและ payroll รอบถัดไป',
]

function getParallaxStyle(pointer: Pointer, scrollY: number, depth: number, tilt = 0): CSSProperties {
  const x = (pointer.x - 0.5) * depth * 48
  const y = (pointer.y - 0.5) * depth * 34 - scrollY * depth * 0.018
  const rotate = (pointer.x - 0.5) * tilt

  return {
    transform: `translate3d(${x.toFixed(2)}px, ${y.toFixed(2)}px, 0) rotate(${rotate.toFixed(2)}deg)`,
  }
}

export default function PresentationPage() {
  const [pointer, setPointer] = useState<Pointer>({ x: 0.5, y: 0.5 })
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) {
        return
      }

      ticking = true
      window.requestAnimationFrame(() => {
        setScrollY(window.scrollY)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      return
    }

    const onMove = (event: MouseEvent) => {
      setPointer({
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight,
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  useEffect(() => {
    const revealItems = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealItems.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${(index % 4) * 90}ms`)
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen text-slate-900">
      <div className="noise" aria-hidden />

      <header className="sticky top-0 z-50 border-b border-white/70 bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-700 ring-1 ring-emerald-400/40">
              ec
            </span>
            <div>
              <p className="font-display text-lg font-semibold leading-none">eCloudTec</p>
              <p className="text-xs text-slate-500">LINE-first HR SaaS</p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#overview" className="transition-colors hover:text-emerald-700">Overview</a>
            <a href="#modules" className="transition-colors hover:text-emerald-700">Modules</a>
            <a href="#insight" className="transition-colors hover:text-emerald-700">Smart Records</a>
          </nav>

          <span className="hidden rounded-full border border-emerald-300/60 bg-emerald-100/70 px-3 py-1 text-xs font-semibold text-emerald-800 sm:block">
            Built for mobile teams
          </span>
        </div>
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden">
          <div className="orb orb-one" aria-hidden />
          <div className="orb orb-two" aria-hidden />
          <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.08fr_0.92fr] lg:px-8">
            <div data-reveal className="reveal space-y-7">
              <p className="inline-flex rounded-full border border-emerald-300/50 bg-white/70 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-emerald-700">
                HR SYSTEM FOR LINE OA / LIFF / MINI APP
              </p>

              <h1 className="font-display text-4xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl">
                eCloudTec ยกระดับงาน HR
                <span className="block text-emerald-600">จากงานมือ สู่ระบบอัตโนมัติเต็มรูปแบบ</span>
              </h1>

              <p className="max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
                หน้า Present นี้ออกแบบเพื่อคุยลูกค้าองค์กรโดยตรง ครอบคลุมทั้งการเช็กอิน-เช็กเอาต์,
                การลา, OT, เงินเดือน และ Dashboard โดยข้อมูลทุกจุดถูกบันทึกอย่างชาญฉลาดแบบเรียลไทม์
              </p>

              <div className="grid gap-3 sm:grid-cols-2">
                {[
                  'Check in-out ใน 1 คลิกบน LINE',
                  'ลาและอนุมัติใน flow เดียว',
                  'คำนวณ OT และเงินเดือนอัตโนมัติ',
                  'Dashboard ผู้บริหารพร้อมใช้งาน',
                ].map((item) => (
                  <div
                    key={item}
                    className="glass-panel rounded-2xl px-4 py-3 text-sm font-medium text-slate-700 ring-1 ring-white/70"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.15em] text-slate-500">
                <span className="rounded-full bg-slate-900 px-3 py-1.5 text-white">LINE OA</span>
                <span className="rounded-full bg-emerald-600 px-3 py-1.5 text-white">LIFF</span>
                <span className="rounded-full bg-cyan-600 px-3 py-1.5 text-white">Mini App</span>
              </div>
            </div>

            <div data-reveal className="reveal relative" style={getParallaxStyle(pointer, scrollY, 0.36, 4)}>
              <div
                className="pointer-events-none absolute -inset-5 rounded-[2.25rem] border border-emerald-300/50"
                style={getParallaxStyle(pointer, scrollY, 0.2, 7)}
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-[2.25rem] border border-white/70 bg-white/85 p-3 shadow-[0_40px_90px_-45px_rgba(8,90,61,0.65)]">
                <Image
                  src="/images/image1.png"
                  alt="eCloudTec hero interface"
                  width={1536}
                  height={1024}
                  priority
                  className="h-auto w-full rounded-[1.75rem]"
                />
              </div>
              <div className="pointer-events-none absolute -bottom-4 left-5 rounded-full border border-emerald-300/60 bg-white/95 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-lg">
                Smart attendance powered by LINE
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <article data-reveal className="reveal relative overflow-hidden rounded-[2rem] bg-slate-950 p-7 text-white sm:p-9">
              <p className="mb-4 inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold tracking-[0.13em] text-slate-200">
                BEFORE ECLOUDTEC
              </p>
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">ปัญหาเดิมที่ทีม HR เจอทุกวัน</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {painPoints.map((point) => (
                  <span key={point} className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100">
                    {point}
                  </span>
                ))}
              </div>
              <Image
                src="/images/image2.png"
                alt="Pain points before using eCloudTec"
                width={1920}
                height={1080}
                className="mt-7 h-auto w-full rounded-2xl border border-white/10"
              />
            </article>

            <article data-reveal className="reveal relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-emerald-400 via-teal-400 to-cyan-400 p-7 sm:p-9">
              <p className="mb-4 inline-flex rounded-full bg-black/10 px-3 py-1 text-xs font-semibold tracking-[0.13em] text-slate-900">
                AFTER ECLOUDTEC
              </p>
              <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                เปลี่ยนเป็น Workflow เดียวบน LINE
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-800 sm:text-base">
                จากกระบวนการที่แยกหลายระบบ กลายเป็นประสบการณ์เดียวที่ใช้งานได้จริงในมือถือ
                และพร้อมต่อยอดเป็นมาตรฐานงาน HR ขององค์กร
              </p>

              <Image
                src="/images/image3.png"
                alt="eCloudTec line integrated solution"
                width={1920}
                height={1080}
                className="mt-7 h-auto w-full rounded-2xl border border-white/60 shadow-[0_20px_40px_-20px_rgba(4,55,39,0.45)]"
              />

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {quickCoverage.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-white/55 bg-white/60 px-3 py-2 text-xs font-semibold text-slate-900"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section id="modules" className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.96fr_1.04fr] lg:px-8">
            <div data-reveal className="reveal relative" style={getParallaxStyle(pointer, scrollY, 0.28, 3)}>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/70 to-cyan-100/40 blur-2xl" aria-hidden />
              <Image
                src="/images/image4.png"
                alt="Leave management on eCloudTec"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-[2rem] border border-white/80 shadow-[0_32px_70px_-42px_rgba(15,94,72,0.5)]"
              />
            </div>

            <div data-reveal className="reveal space-y-6">
              <p className="inline-flex rounded-full border border-emerald-300/70 bg-emerald-100/80 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-emerald-800">
                LEAVE + APPROVAL EXPERIENCE
              </p>

              <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                ขออนุมัติลาแบบมืออาชีพ
                <span className="block text-emerald-700">ครบตั้งแต่พนักงานจนถึงผู้จัดการ</span>
              </h2>

              <p className="text-base leading-relaxed text-slate-600">
                ระบบถูกออกแบบให้ผู้ใช้งานไม่ต้องเรียนรู้ใหม่มาก ใช้โครงสร้างที่คล้ายการแชตใน LINE
                แต่จัดการข้อมูลได้ระดับระบบองค์กร พร้อมประวัติการอนุมัติและหลักฐานย้อนหลังที่ชัดเจน
              </p>

              <div className="space-y-3">
                {featureRows.map((row) => (
                  <div key={row.title} className="glass-panel rounded-2xl p-4">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{row.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{row.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="insight" className="py-16 sm:py-20 md:py-24">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div data-reveal className="reveal space-y-6">
              <p className="inline-flex rounded-full border border-cyan-300/70 bg-cyan-100/80 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-cyan-800">
                SMART RECORD ENGINE
              </p>
              <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                ข้อมูลถูกบันทึกอย่างชาญฉลาด
                <span className="block text-cyan-700">พร้อมใช้คำนวณ OT, Payroll และ Dashboard</span>
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                eCloudTec ทำให้ทุกกิจกรรม HR กลายเป็นข้อมูลที่ตรวจสอบได้ ใช้งานต่อได้ และส่งต่อเป็นข้อมูลธุรกิจได้ทันที
                ลดเวลาปิดรอบงาน HR และทำให้ผู้บริหารมองภาพรวมทีมได้เร็วขึ้น
              </p>

              <div className="grid gap-3">
                {smartRecordPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                    <span className="mt-0.5 h-2.5 w-2.5 rounded-full bg-cyan-500" aria-hidden />
                    <p className="text-sm leading-relaxed text-slate-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>

            <div data-reveal className="reveal relative" style={getParallaxStyle(pointer, scrollY, 0.24, -3)}>
              <div className="absolute -inset-5 -z-10 rounded-[2rem] bg-gradient-to-br from-cyan-200/50 to-blue-100/40 blur-2xl" aria-hidden />
              <Image
                src="/images/image5.png"
                alt="Smart check-in flow and attendance screens"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-[2rem] border border-white/80 shadow-[0_32px_70px_-42px_rgba(12,74,110,0.55)]"
              />
            </div>
          </div>
        </section>

        <section className="pb-16 pt-6 sm:pb-20">
          <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="reveal overflow-hidden rounded-[2.2rem] bg-slate-950 p-8 text-white sm:p-10 lg:p-12">
              <p className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-slate-200">
                CLIENT PRESENTATION READY
              </p>
              <h2 className="mt-5 font-display text-3xl leading-tight sm:text-4xl">
                Landing หน้าเดียว ที่เล่า Value ธุรกิจได้ครบ
              </h2>
              <p className="mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">
                โครงสร้างนี้ออกแบบมาเพื่อคุยกับลูกค้าโดยตรง เน้นความชัดของปัญหา-วิธีแก้-ผลลัพธ์ และยืนยันว่า
                ระบบ eCloudTec ใช้งานบนมือถือได้จริงตั้งแต่หน้างานจนถึงงานวิเคราะห์ของ HR และผู้บริหาร
              </p>

              <div className="mt-8 grid gap-4 md:grid-cols-3">
                {[
                  ['Check in-out', 'พร้อมใช้งานบน LINE ทันที'],
                  ['Leave / OT / Payroll', 'ลดงานมือและลดความผิดพลาด'],
                  ['Dashboard & Smart Records', 'ดูภาพรวมองค์กรแบบ real-time'],
                ].map(([title, subtitle]) => (
                  <div key={title} className="rounded-2xl border border-white/15 bg-white/5 p-4">
                    <p className="font-display text-lg font-semibold text-white">{title}</p>
                    <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200/80 bg-white/80 py-6">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 text-xs text-slate-500 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 eCloudTec HR SaaS Presentation</p>
          <p>LINE OA • LINE LIFF • LINE Mini App</p>
        </div>
      </footer>
    </div>
  )
}
