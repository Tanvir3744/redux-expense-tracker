export const Layout = ({ children }) => {
    <div className="App">
        <div className="header">
            <h1>Expense Tracker</h1>
        </div>
        <div className="main">
            <div className="container">{children}</div>
        </div>
        {/* footer component */}
        <div className="footer">&copy;2022 Learn with Sumit</div>
    </div>
}