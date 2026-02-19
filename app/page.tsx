'use client'

import Image from 'next/image'
import { CSSProperties, useEffect, useState } from 'react'

type Pointer = {
  x: number
  y: number
}

type JourneyItem = {
  step: string
  title: string
  description: string
  bullets: string[]
  images: string[]
  note?: string
  outcome?: string
}

const painPoints = [
  'Inaccurate attendance records',
  'Slow leave approvals',
  'Manual overtime calculations',
  'Payroll delays every month',
  'No real-time workforce visibility',
]

const quickCoverage = [
  'LINE OA check in/out in one tap',
  'Leave request and approval workflow',
  'Overtime tracking with real data',
  'Payroll-ready attendance output',
]

const aiAgentBenefits = [
  'Answers HR questions instantly from attendance, leave, and OT context',
  'Detects anomalies and summarizes what HR should handle first',
  'Drafts clear follow-up actions to reduce manual coordination time',
]

const aiAgentImpact = [
  { value: '-35%', label: 'manual admin workload' },
  { value: '2x', label: 'faster HR response' },
  { value: 'Real-time', label: 'performance visibility' },
]

const systemModules = [
  {
    title: 'Smart Check In-Out',
    detail: 'Capture time, location, and device context in one flow across LINE OA, LIFF, and Mini App.',
  },
  {
    title: 'Convenient Leave Management',
    detail: 'Submit, approve, and audit leave requests with full timeline visibility for HR and managers.',
  },
  {
    title: 'Accurate Overtime Engine',
    detail: 'Automatically compute OT from approved records to reduce disputes and manual spreadsheet work.',
  },
  {
    title: 'Payroll + Dashboard',
    detail: 'Turn attendance, leave, and OT into payroll-ready summaries and executive dashboards instantly.',
  },
  {
    title: 'Embedded AI Agent',
    detail: 'Give HR teams an AI assistant for Q&A, anomaly triage, and next-action suggestions inside daily workflow.',
  },
]

const smartRecordPoints = [
  'Every event is captured with a continuous timestamp trail',
  'Automatically flags anomalies: missing check-out, late entries, duplicate actions',
  'Produces daily, weekly, and monthly summaries in real-time',
  'Data is ready for payroll processing and management reporting',
]

const journeyImprovements = [
  'Role-based walkthrough grouping for clearer client storytelling',
  'Visual step markers and outcome cards for faster understanding',
  'Smoother transition from light business intro to dark technical deep-dive',
]

const employeeJourney: JourneyItem[] = [
  {
    step: 'Employee Journey 01',
    title: 'Access the system directly from LINE OA',
    description:
      'Employees use a familiar LINE interface. No extra app onboarding is required, which speeds up rollout and adoption.',
    bullets: ['Mobile-first interaction', 'One-touch entry points', 'Fast adoption for frontline teams'],
    images: ['/images/IMG_5229.PNG'],
    outcome: 'Faster user adoption with minimal onboarding effort.',
  },
  {
    step: 'Employee Journey 02',
    title: 'Complete secure first-time registration',
    description:
      'Identity fields are validated on first setup, then linked to the employee profile for consistent attendance and leave records.',
    bullets: ['One-time registration', 'Profile-link validation', 'Clean employee identity mapping'],
    images: ['/images/IMG_5218.PNG'],
    outcome: 'Higher data quality and fewer identity-related attendance issues.',
  },
  {
    step: 'Employee Journey 03',
    title: 'Check in and check out in one second',
    description:
      'The platform confirms attendance actions quickly and records location-aware evidence for transparent workforce operations.',
    bullets: ['One-click attendance action', 'Real-time confirmation', 'Audit-ready check-in evidence'],
    images: ['/images/IMG_5237.PNG', '/images/IMG_5238.PNG'],
    note: 'Use case: field teams, multi-branch operations, and hybrid work patterns.',
    outcome: 'Reliable time records with lower manual correction workload.',
  },
  {
    step: 'Employee Journey 04',
    title: 'Submit leave requests with clear status tracking',
    description:
      'Employees can request leave from the same LINE flow and instantly track pending, approved, or rejected statuses.',
    bullets: ['Simple leave form', 'Status visibility', 'Reduced back-and-forth messaging'],
    images: ['/images/IMG_5216.PNG'],
    outcome: 'Leave approvals move faster with fewer communication loops.',
  },
  {
    step: 'Employee Journey 05',
    title: 'Track overtime and attendance history',
    description:
      'Each employee can monitor personal attendance and overtime data without waiting for manual HR updates.',
    bullets: ['Personal OT visibility', 'Date-range filtering', 'Transparent attendance history'],
    images: ['/images/IMG_5219.PNG'],
    outcome: 'Better transparency and fewer payroll clarification requests.',
  },
]

const hrJourney: JourneyItem[] = [
  {
    step: 'HR Journey 01',
    title: 'Operate through a dedicated HR LINE channel',
    description:
      'HR teams work in a protected management flow with focused controls for workforce operations.',
    bullets: ['Dedicated HR interface', 'Operational controls', 'Faster daily management tasks'],
    images: ['/images/IMG_5239.PNG'],
    outcome: 'Centralized control with clearer role separation.',
  },
  {
    step: 'HR Journey 02',
    title: 'Use secure admin access controls',
    description:
      'Restricted registration and role-based access keep sensitive HR actions under proper authorization.',
    bullets: ['Access restrictions', 'Role verification', 'Safer administrative actions'],
    images: ['/images/IMG_5225.PNG'],
    outcome: 'Lower security risk for sensitive HR operations.',
  },
  {
    step: 'HR Journey 03',
    title: 'Manage employee records in one place',
    description:
      'HR can view, add, edit, and maintain workforce records quickly from a unified panel.',
    bullets: ['Structured employee data', 'Quick search and update', 'Reliable profile lifecycle management'],
    images: ['/images/IMG_5223.PNG'],
    outcome: 'Less time spent switching between disconnected tools.',
  },
  {
    step: 'HR Journey 04',
    title: 'Approve leave requests instantly',
    description:
      'Incoming leave requests are presented with the required details so decisions can be made faster and tracked clearly.',
    bullets: ['Approval-ready request cards', 'One-tap approve/reject', 'Immediate status feedback'],
    images: ['/images/IMG_5221.PNG'],
    outcome: 'Faster decision turnaround with clear approval audit trails.',
  },
  {
    step: 'HR Journey 05',
    title: 'Monitor overtime data at team scale',
    description:
      'Analyze overtime totals, trends, and employee-level details to control labor costs and planning accuracy.',
    bullets: ['Summary and detail views', 'Filter by date and employee', 'Export-friendly output'],
    images: ['/images/IMG_5224.PNG'],
    outcome: 'Improved labor planning and tighter overtime control.',
  },
  {
    step: 'HR Journey 06',
    title: 'Review a real-time executive dashboard',
    description:
      'Live KPIs provide immediate visibility into attendance, overtime, and workforce performance signals.',
    bullets: ['Attendance overview', 'OT performance indicators', 'Manager-ready analytics'],
    images: ['/images/IMG_5240.PNG'],
    outcome: 'Leadership gets a live view for faster operational decisions.',
  },
  {
    step: 'HR Journey 07',
    title: 'Coordinate directly with employees',
    description:
      'HR can identify the right employee quickly and initiate direct communication without switching systems.',
    bullets: ['Employee search', 'Communication shortcuts', 'Faster issue resolution'],
    images: ['/images/IMG_5226.PNG'],
    outcome: 'Shorter resolution time for attendance and leave issues.',
  },
  {
    step: 'HR Journey 08',
    title: 'Use an AI assistant for operational questions',
    description:
      'Built-in AI support helps HR teams retrieve information and interpret operational data more efficiently.',
    bullets: ['Instant HR Q&A', 'Guided insight support', 'Reduced response time'],
    images: ['/images/IMG_5227.PNG', '/images/IMG_5222.PNG'],
    note: 'AI conversations are logged for traceability and team collaboration.',
    outcome: 'AI-guided actions reduce repetitive HR work and improve team performance.',
  },
]

const additionalCaptures = ['/images/IMG_5230.PNG', '/images/IMG_5231.PNG', '/images/IMG_5236.PNG']

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
        threshold: 0.16,
        rootMargin: '0px 0px -8% 0px',
      }
    )

    revealItems.forEach((node, index) => {
      node.style.setProperty('--reveal-delay', `${(index % 5) * 85}ms`)
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
            <a href="#ai-agent" className="transition-colors hover:text-emerald-700">AI Agent</a>
            <a href="#journey" className="transition-colors hover:text-emerald-700">Product Journey</a>
            <a href="#hq" className="transition-colors hover:text-emerald-700">HR Control</a>
          </nav>

          <span className="hidden rounded-full border border-emerald-300/60 bg-emerald-100/70 px-3 py-1 text-xs font-semibold text-emerald-800 sm:block">
            Mobile-ready for operations
          </span>
        </div>
      </header>

      <main>
        <section id="overview" className="relative overflow-hidden">
          <div className="orb orb-one" aria-hidden />
          <div className="orb orb-two" aria-hidden />

          <div className="mx-auto w-full max-w-7xl px-4 pb-20 pt-16 sm:px-6 md:pt-24 lg:px-8">
            <div className="grid items-start gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:gap-12">
              <div data-reveal className="reveal space-y-6">
                <p className="inline-flex rounded-full border border-emerald-300/50 bg-white/75 px-4 py-1.5 text-xs font-semibold tracking-[0.16em] text-emerald-700">
                  LINE OA / LIFF / MINI APP HR PLATFORM
                </p>

                <h1 className="font-display text-4xl font-semibold leading-[1.04] text-slate-950 sm:text-5xl lg:text-[4.35rem]">
                  eCloudTec transforms HR execution
                </h1>
                <p className="font-display text-2xl font-semibold leading-tight text-emerald-600 sm:text-3xl">
                  with AI-assisted automation
                </p>

                <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
                  Built for real client conversations: attendance, leave, overtime, payroll, and dashboard visibility in one
                  connected LINE-first experience.
                </p>

                <div className="grid gap-3 sm:grid-cols-2">
                  {[
                    'One-tap check in/out on LINE',
                    'Convenient leave workflow',
                    'Automatic OT and payroll prep',
                    'Live dashboard for leadership',
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

              <div data-reveal className="reveal relative mt-1 lg:mt-3" style={getParallaxStyle(pointer, scrollY, 0.27, 2.5)}>
                <div
                  className="pointer-events-none absolute -inset-4 rounded-[2rem] border border-emerald-300/50"
                  style={getParallaxStyle(pointer, scrollY, 0.15, 5)}
                  aria-hidden
                />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/75 bg-white/88 p-3 shadow-[0_34px_80px_-42px_rgba(8,90,61,0.58)]">
                  <Image
                    src="/images/image1.png"
                    alt="eCloudTec attendance hero interface"
                    width={1536}
                    height={1024}
                    priority
                    className="h-auto w-full rounded-[1.55rem]"
                  />
                </div>
                <div className="pointer-events-none absolute -bottom-4 left-5 rounded-full border border-emerald-300/60 bg-white/95 px-4 py-2 text-xs font-semibold text-emerald-700 shadow-lg">
                  Smart attendance on LINE
                </div>
              </div>
            </div>

            <div
              id="ai-agent"
              data-reveal
              className="reveal relative mt-10 grid gap-5 overflow-hidden rounded-[2rem] border border-emerald-300/60 bg-gradient-to-br from-emerald-50 to-cyan-50 p-5 shadow-[0_22px_50px_-36px_rgba(14,116,144,0.5)] sm:p-7 lg:grid-cols-[1.05fr_0.95fr]"
            >
              <div className="pointer-events-none absolute -top-16 right-4 h-32 w-32 rounded-full bg-emerald-300/30 blur-2xl" aria-hidden />
              <div className="space-y-4">
                <p className="inline-flex rounded-full bg-emerald-600 px-3 py-1 text-[11px] font-semibold tracking-[0.12em] text-white">
                  AI AGENT ENABLED HR
                </p>
                <h2 className="font-display text-2xl leading-tight text-slate-900 sm:text-3xl">
                  Let AI Agent remove repetitive HR work and improve team performance
                </h2>
                <p className="text-sm leading-relaxed text-slate-700 sm:text-base">
                  Our AI Agent helps HR answer questions, detect issues early, and prioritize what to handle first. This reduces
                  manual workload and improves overall operational efficiency.
                </p>
                <div className="grid gap-2">
                  {aiAgentBenefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="rounded-xl border border-emerald-200/80 bg-white/80 px-3 py-2 text-xs font-medium text-slate-700 sm:text-sm"
                    >
                      {benefit}
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid content-start gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {aiAgentImpact.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-cyan-200/80 bg-white/82 px-4 py-4 text-center">
                    <p className="font-display text-xl text-slate-900">{metric.value}</p>
                    <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-slate-500">{metric.label}</p>
                  </div>
                ))}
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
              <h2 className="font-display text-3xl leading-tight sm:text-4xl">Common HR operation pain points</h2>
              <div className="mt-6 flex flex-wrap gap-2.5">
                {painPoints.map((point) => (
                  <span
                    key={point}
                    className="rounded-full border border-white/20 bg-white/10 px-3 py-1.5 text-xs font-medium text-slate-100"
                  >
                    {point}
                  </span>
                ))}
              </div>
              <Image
                src="/images/image2.png"
                alt="HR pain points before modernization"
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
                One connected workflow on LINE
              </h2>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-800 sm:text-base">
                Instead of scattered processes, teams run attendance, leave, and overtime in a single mobile flow that HR can trust.
              </p>

              <Image
                src="/images/image3.png"
                alt="Integrated line based HR workflow"
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

        <section className="py-16 sm:py-20">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[0.98fr_1.02fr] lg:px-8">
            <div data-reveal className="reveal relative" style={getParallaxStyle(pointer, scrollY, 0.28, 3)}>
              <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-emerald-200/70 to-cyan-100/40 blur-2xl" aria-hidden />
              <Image
                src="/images/image4.png"
                alt="Leave workflow screen set"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-[2rem] border border-white/80 shadow-[0_32px_70px_-42px_rgba(15,94,72,0.5)]"
              />
            </div>

            <div data-reveal className="reveal space-y-6">
              <p className="inline-flex rounded-full border border-emerald-300/70 bg-emerald-100/80 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-emerald-800">
                MODULE OVERVIEW
              </p>
              <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                Built for full-cycle HR execution
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                The platform combines employee actions and HR controls in one integrated system, reducing manual work while improving
                compliance and reporting confidence.
              </p>

              <div className="space-y-3">
                {systemModules.map((row) => (
                  <div key={row.title} className="glass-panel rounded-2xl p-4">
                    <h3 className="font-display text-lg font-semibold text-slate-900">{row.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-slate-600">{row.detail}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="pb-10 pt-12 sm:pb-14 sm:pt-16">
          <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
            <div data-reveal className="reveal space-y-6">
              <p className="inline-flex rounded-full border border-cyan-300/70 bg-cyan-100/80 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-cyan-800">
                SMART DATA RECORDING
              </p>
              <h2 className="font-display text-3xl leading-tight text-slate-950 sm:text-4xl">
                Intelligent records power OT, payroll, and dashboards
              </h2>
              <p className="text-base leading-relaxed text-slate-600">
                eCloudTec captures each HR action as reliable operational data so your team can move faster with fewer errors.
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
                alt="Check in status and confirmation flow"
                width={1536}
                height={1024}
                className="h-auto w-full rounded-[2rem] border border-white/80 shadow-[0_32px_70px_-42px_rgba(12,74,110,0.55)]"
              />
            </div>
          </div>
        </section>

        <section aria-hidden className="h-36 bg-gradient-to-b from-transparent via-slate-300/35 to-slate-950 sm:h-44" />

        <section id="journey" className="relative overflow-hidden bg-[linear-gradient(180deg,#0f172a_0%,#0b1123_42%,#020617_100%)] pb-20 pt-10 text-slate-100 sm:pt-16 md:pb-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(45,212,191,0.16),transparent_40%),radial-gradient(circle_at_85%_10%,rgba(56,189,248,0.15),transparent_36%)]" aria-hidden />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="reveal mb-12 max-w-3xl">
              <p className="inline-flex rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1 text-xs font-semibold tracking-[0.13em] text-cyan-200">
                WALKTHROUGH FLOW - REAL PRODUCT CAPTURES
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                Product journey with real captured screens
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                This section keeps the original walkthrough concept using your real product screenshots (IMG_XXX.PNG) so it is practical for sales meetings.
              </p>
            </div>

            <div data-reveal className="reveal mb-8 grid gap-3 md:grid-cols-3">
              {journeyImprovements.map((point) => (
                <div key={point} className="rounded-xl border border-cyan-300/20 bg-cyan-500/10 px-4 py-3 text-xs font-medium text-cyan-100 sm:text-sm">
                  {point}
                </div>
              ))}
            </div>

            <div data-reveal className="reveal mb-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                Employee flow: 5 steps
              </span>
              <span className="rounded-full border border-cyan-300/35 bg-cyan-500/15 px-3 py-1 text-xs font-semibold text-cyan-100">
                Real screenshots only
              </span>
              <span className="rounded-full border border-emerald-300/30 bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-100">
                Sales conversation ready
              </span>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {employeeJourney.map((item, index) => {
                const flip = index % 2 === 1

                return (
                  <article
                    key={item.step}
                    data-reveal
                    className="reveal grid items-center gap-6 rounded-[1.75rem] border border-white/12 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-7 lg:grid-cols-2"
                  >
                    <div className={flip ? 'order-2 lg:order-2' : 'order-2 lg:order-1'}>
                      <div className={`grid gap-3 ${item.images.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                        {item.images.map((img) => (
                          <div key={img} className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/40 p-2">
                            <Image
                              src={img}
                              alt={`${item.title} screen`}
                              width={1024}
                              height={1792}
                              className="h-auto w-full rounded-xl"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={flip ? 'order-1 lg:order-1' : 'order-1 lg:order-2'}>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-400/25 text-xs font-bold text-cyan-100 ring-1 ring-cyan-300/35">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <p className="inline-flex rounded-full bg-cyan-500/15 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-cyan-200">
                          {item.step}
                        </p>
                      </div>
                      <h3 className="mt-4 font-display text-2xl leading-tight text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-200">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-300" aria-hidden />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.note ? (
                        <p className="mt-5 rounded-xl border border-cyan-300/25 bg-cyan-500/10 px-3 py-2 text-xs text-cyan-100">
                          {item.note}
                        </p>
                      ) : null}

                      {item.outcome ? (
                        <div className="mt-4 rounded-xl border border-emerald-300/25 bg-emerald-500/10 px-3 py-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-emerald-200">Business Outcome</p>
                          <p className="mt-1 text-sm text-emerald-100">{item.outcome}</p>
                        </div>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="hq" className="relative overflow-hidden bg-[linear-gradient(180deg,#020617_0%,#02050f_100%)] pb-24 pt-14 text-slate-100 sm:pt-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_15%,rgba(148,163,184,0.18),transparent_33%),radial-gradient(circle_at_15%_25%,rgba(59,130,246,0.12),transparent_30%)]" aria-hidden />

          <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
            <div data-reveal className="reveal mb-10 max-w-3xl">
              <p className="inline-flex rounded-full border border-slate-300/30 bg-white/5 px-4 py-1 text-xs font-semibold tracking-[0.12em] text-slate-300">
                HR CONTROL CENTER WALKTHROUGH
              </p>
              <h2 className="mt-4 font-display text-3xl leading-tight text-white sm:text-4xl">
                Deep-dive management flow for HR teams
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">
                Dark-tone section for contrast and premium presentation style, while keeping the transition smooth from the upper light experience.
              </p>
            </div>

            <div data-reveal className="reveal mb-8 flex flex-wrap gap-2.5">
              <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-200">
                HR control flow: 8 steps
              </span>
              <span className="rounded-full border border-sky-300/35 bg-sky-500/15 px-3 py-1 text-xs font-semibold text-sky-100">
                Includes AI Agent operations
              </span>
              <span className="rounded-full border border-slate-300/30 bg-slate-500/20 px-3 py-1 text-xs font-semibold text-slate-100">
                Optimized for executive demo
              </span>
            </div>

            <div className="space-y-8 sm:space-y-10">
              {hrJourney.map((item, index) => {
                const flip = index % 2 === 0

                return (
                  <article
                    key={item.step}
                    data-reveal
                    className="reveal grid items-center gap-6 rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-sm sm:p-7 lg:grid-cols-2"
                  >
                    <div className={flip ? 'order-2 lg:order-1' : 'order-2 lg:order-2'}>
                      <div className={`grid gap-3 ${item.images.length > 1 ? 'sm:grid-cols-2' : 'grid-cols-1'}`}>
                        {item.images.map((img) => (
                          <div key={img} className="overflow-hidden rounded-2xl border border-white/12 bg-slate-950/40 p-2">
                            <Image
                              src={img}
                              alt={`${item.title} screen`}
                              width={1024}
                              height={1792}
                              className="h-auto w-full rounded-xl"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className={flip ? 'order-1 lg:order-2' : 'order-1 lg:order-1'}>
                      <div className="flex items-center gap-3">
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-slate-300/20 text-xs font-bold text-slate-100 ring-1 ring-slate-300/35">
                          {(index + 1).toString().padStart(2, '0')}
                        </span>
                        <p className="inline-flex rounded-full bg-slate-500/25 px-3 py-1 text-xs font-semibold tracking-[0.12em] text-slate-200">
                          {item.step}
                        </p>
                      </div>
                      <h3 className="mt-4 font-display text-2xl leading-tight text-white sm:text-3xl">{item.title}</h3>
                      <p className="mt-4 text-sm leading-relaxed text-slate-300 sm:text-base">{item.description}</p>

                      <ul className="mt-5 space-y-2">
                        {item.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-2 text-sm text-slate-200">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-slate-300" aria-hidden />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {item.note ? (
                        <p className="mt-5 rounded-xl border border-slate-300/25 bg-white/10 px-3 py-2 text-xs text-slate-100">
                          {item.note}
                        </p>
                      ) : null}

                      {item.outcome ? (
                        <div className="mt-4 rounded-xl border border-sky-300/20 bg-sky-500/10 px-3 py-2">
                          <p className="text-[10px] font-semibold uppercase tracking-[0.13em] text-sky-200">Business Outcome</p>
                          <p className="mt-1 text-sm text-sky-100">{item.outcome}</p>
                        </div>
                      ) : null}
                    </div>
                  </article>
                )
              })}
            </div>

            <div data-reveal className="reveal mt-12">
              <h3 className="font-display text-xl text-white sm:text-2xl">Additional real capture gallery</h3>
              <p className="mt-2 text-sm text-slate-400">Extra product screenshots kept from the original presentation set.</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-3">
                {additionalCaptures.map((img) => (
                  <div key={img} className="overflow-hidden rounded-2xl border border-white/12 bg-slate-900/40 p-2">
                    <Image
                      src={img}
                      alt="Additional product capture"
                      width={1024}
                      height={1792}
                      className="h-auto w-full rounded-xl"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-700/40 bg-[#01040c] py-8 text-slate-400">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 text-xs sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>© 2026 eCloudTec HR SaaS Presentation</p>
          <p>LINE OA • LINE LIFF • LINE Mini App</p>
        </div>
      </footer>
    </div>
  )
}
