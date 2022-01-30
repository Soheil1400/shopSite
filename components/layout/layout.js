import Footer from '../footer/footer'

const Layout = ({children}) =>{
    return(
        <>
          <main>
              {children}
          </main>
          <Footer/>
        </>
    )
}

export default Layout