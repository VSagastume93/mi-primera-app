import './footer.css'

function Footer(){
    return (
        <footer className="footer">
            <div className='container'>
                <div className="text">
                    <h4>Follow Us!</h4>
                </div>
                <div className="icons">
                    <div className="tiktok">
                    <a href="https://www.tiktok.com/@pokemonofficial" target={'_blank'} rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M9 12a4 4 0 1 0 4 4v-12a5 5 0 0 0 5 5" />
                        </svg>
                    </a>
                    <p>tik-tok</p>
                    </div>
                    <div className="instagram">
                    <a href="https://www.instagram.com/pokemon/" target={'_blank'} rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-instagram" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </a>
                    <p>Instagram</p>
                    </div>
                    <div className="facebook">
                    <a href="https://www.facebook.com/PokemonOficialLatAm" target={'_blank'} rel="noopener noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-facebook" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#FFFFFF" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </a>
                    <p>Facebook</p>
                    </div>
                </div>
            </div>

        </footer>
    )
}

export default Footer;