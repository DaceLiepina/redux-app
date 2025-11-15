
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import store from './store'

//Оберните приложение в <Provider store={store}> , чтобы передать Reduxхранилище всему приложению.

createRoot(document.getElementById('root')!).render(
<Provider store={store}>
<App/>
</Provider>
)
