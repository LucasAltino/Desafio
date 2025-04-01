import style from './Home.module.css'
import {Link} from "react-router-dom";

function Home(){
    return(
        <div className={style.contain}>
            <div className={style.elemento1}>
                <img src="./elemento1.png" alt="" />
            </div>

            <div className={style.principal}>
                <div className={style.img}>
                    <img src="./logo.png" alt="" />
                </div>
                <div className={style.conteudo}>
                    <div className={style.escritas}>
                        <h2>Clínica veterinária</h2>
                        <h1>Seu pet, <br></br>
                        Em boas mãos</h1>
                        <p>Serviços veterinários, banho & tosa e muito mais para o bem-estar do seu pet.</p>
                    </div>
                    <div>
                        <Link to={'/atendimento'}>                        
                            <h3>Atendimentos</h3>
                        </Link>
                    </div>
                </div>
            </div>

            <div className={style.elemento2}>
                <img className={style.atras} src="./elemento2.png" alt="" />
                <img className={style.afrente} src="./cachorro.png" alt="" />
            </div>
        </div>
    )
}

export default Home;