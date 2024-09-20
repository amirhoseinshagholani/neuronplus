
const RootLayout=({children}:any)=>{
    return(
        <html>
            <body>
                <div>header</div>
                <div>{children}</div>
                <div>footer</div>
            </body>
        </html>
    )
}

export default RootLayout;