import { useLocation } from "react-router-dom"
function Header() {
    const data = useLocation()
    // const name = data.state.user
    return (
     
        <>
            <h1 className="text-3xl font-medium">Hello {data.state.user}!</h1>
            <p>I Help You Manage Yout Activities :)</p>
        </>
    )
}
export default Header