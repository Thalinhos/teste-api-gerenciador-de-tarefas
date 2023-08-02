const footerStyle = {
    position: 'fixed',
    bottom: '0',
    left: '0',
    width: '100%',
    padding: '10px',
    textAlign: 'center',
};

function Footer() {

    return (

        <div className="footer" style={footerStyle}> 
            <footer>
                <p>Desenvolvido por Criativos</p>
            </footer>
        </div>
        
    )


}

export default Footer