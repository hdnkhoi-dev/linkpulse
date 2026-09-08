import {
  ArrowUpRight,
  Copy,
  Link2,
  MapPin,
  MoreHorizontal,
  Plus,
  TrendingUp,
} from 'lucide-react'
import Sidebar from './components/Sidebar'

const recentLinks = [
  {
    alias: 'linkpulse.io/s/summer',
    destination: 'your-product.com/summer-campaign',
    clicks: '5,627',
    createdAt: 'Today',
  },
  {
    alias: 'linkpulse.io/s/github',
    destination: 'github.com/minh/linkpulse',
    clicks: '2,914',
    createdAt: 'Sep 05, 2026',
  },
  {
    alias: 'linkpulse.io/s/portfolio',
    destination: 'minh.dev/portfolio',
    clicks: '1,208',
    createdAt: 'Sep 02, 2026',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="flex">
        <Sidebar />

        <main className="min-w-0 flex-1 p-6 md:p-10">
          <header className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
            <div>
              <p className="text-sm font-medium text-blue-400">DASHBOARD</p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
                Good morning, Minh
              </h1>
              <p className="mt-2 text-sm text-slate-400">
                Here is how your links are performing.
              </p>
            </div>

            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"
            >
              <Plus size={18} />
              Create link
            </button>
          </header>

          <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/60 p-4">
            <div className="flex flex-col gap-3 lg:flex-row">
              <div className="relative flex-1">
                <Link2
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500"
                  size={18}
                />
                <input
                  className="w-full rounded-lg border border-slate-700 bg-slate-950 py-3 pl-10 pr-4 text-sm outline-none placeholder:text-slate-500 focus:border-blue-500"
                  placeholder="Paste a long URL to shorten"
                  type="url"
                />
              </div>

              <input
                className="rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 text-sm outline-none placeholder:text-slate-500 focus:border-blue-500"
                placeholder="Custom alias (optional)"
                type="text"
              />

              <button
                type="button"
                className="rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"
              >
                Shorten
              </button>
            </div>
          </section>

          <section className="mt-8 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Total clicks</p>
                <TrendingUp className="text-blue-400" size={20} />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">12,482</p>
              <p className="mt-2 text-sm text-emerald-400">↑ 18.4% this week</p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Active links</p>
                <Link2 className="text-blue-400" size={20} />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">28</p>
              <p className="mt-2 text-sm text-emerald-400">↑ 3 new links</p>
            </article>

            <article className="rounded-xl border border-slate-800 bg-slate-900 p-5">
              <div className="flex items-center justify-between">
                <p className="text-sm text-slate-400">Top country</p>
                <MapPin className="text-blue-400" size={20} />
              </div>
              <p className="mt-4 text-3xl font-bold text-white">Vietnam</p>
              <p className="mt-2 text-sm text-slate-400">38% of all clicks</p>
            </article>
          </section>

          <section className="mt-10">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-white">Recent links</h2>
                <p className="mt-1 text-sm text-slate-400">
                  Your latest shortened links and performance.
                </p>
              </div>

              <button
                type="button"
                className="text-sm font-medium text-blue-400 hover:text-blue-300"
              >
                View all
              </button>
            </div>

            <div className="mt-5 overflow-x-auto rounded-xl border border-slate-800 bg-slate-900">
              <table className="w-full min-w-175 text-left text-sm">
                <thead className="border-b border-slate-800 text-xs uppercase tracking-wide text-slate-400">
                  <tr>
                    <th className="px-5 py-4 font-medium">Short link</th>
                    <th className="px-5 py-4 font-medium">Clicks</th>
                    <th className="px-5 py-4 font-medium">Status</th>
                    <th className="px-5 py-4 font-medium">Created</th>
                    <th className="px-5 py-4 font-medium">
                      <span className="sr-only">Actions</span>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {recentLinks.map((link) => (
                    <tr
                      key={link.alias}
                      className="border-b border-slate-800 last:border-0"
                    >
                      <td className="px-5 py-4">
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-blue-400">
                            {link.alias}
                          </span>
                          <button
                            type="button"
                            aria-label={`Copy ${link.alias}`}
                            className="text-slate-500 hover:text-white"
                          >
                            <Copy size={15} />
                          </button>
                        </div>
                        <p className="mt-1 max-w-xs truncate text-xs text-slate-500">
                          {link.destination}
                        </p>
                      </td>
                      <td className="px-5 py-4 font-medium text-white">
                        {link.clicks}
                      </td>
                      <td className="px-5 py-4">
                        <span className="inline-flex items-center gap-2 text-emerald-400">
                          <span className="h-2 w-2 rounded-full bg-emerald-400" />
                          Active
                        </span>
                      </td>
                      <td className="px-5 py-4 text-slate-400">
                        {link.createdAt}
                      </td>
                      <td className="px-5 py-4">
                        <button
                          type="button"
                          aria-label={`Open ${link.alias}`}
                          className="text-slate-500 hover:text-white"
                        >
                          <MoreHorizontal size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <section className="mt-8 flex items-center gap-2 text-sm text-slate-500">
            <ArrowUpRight size={16} />
            Analytics data is currently sample data.
          </section>
        </main>
      </div>
    </div>
  )
}

export default App