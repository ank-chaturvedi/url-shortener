import { Provider } from 'react-redux'
import { UrlFrom } from "./components/UrlForm"
import store from "./store/index"
import { Urls } from './components/Urls'
import { Toaster } from './components/ui/toaster'
function App() {
  return (
    <Provider store={store}>
      <main className="max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
        <section>
          <UrlFrom />
        </section>
        <section className="flex flex-col gap-y-4 mt-4">
          <Urls />
        </section>
      </main>
      <Toaster />
    </Provider>
  )
}

export default App
