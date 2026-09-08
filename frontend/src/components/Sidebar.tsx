import {
  BarChart3,
  Link2,
  LayoutDashboard,
  Settings,
} from 'lucide-react'

const navigationItems = [
  { label: 'Dashboard', icon: LayoutDashboard, active: true },
  { label: 'My links', icon: Link2, active: false },
  { label: 'Analytics', icon: BarChart3, active: false },
  { label: 'Settings', icon: Settings, active: false },
]

function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-64 shrink-0 border-r border-slate-800 bg-slate-950 p-5 md:block">
      <a
        className="flex items-center gap-2 text-xl font-bold tracking-tight text-white"
        href="/"
      >
        <span className="rounded-lg bg-blue-600 px-2 py-1 text-sm">LP</span>
        LinkPulse
      </a>

      <nav className="mt-10 space-y-2">
        {navigationItems.map((item) => {
          const Icon = item.icon

          return (
            <button
              key={item.label}
              type="button"
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition ${
                item.active
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-400 hover:bg-slate-900 hover:text-white'
              }`}
            >
              <Icon size={18} />
              {item.label}
            </button>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar