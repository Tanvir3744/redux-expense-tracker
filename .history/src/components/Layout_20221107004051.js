export const Layout = ({ children }) => {
    <div class="App">
        <div class="header">
            <h1>Expense Tracker</h1>
        </div>
        <div class="main">
            <div class="container">{children}</div>
        </div>
        {/* footer component */}
    </div>
}