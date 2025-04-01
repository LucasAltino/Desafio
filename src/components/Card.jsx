import style from './Card.module.css';

function Card({ pets }) {
    return (
        <div className={style.contain}>
            {pets.map((pet) => (
                <div key={pet.id} className={style.cardInfo}>
                    {pet.reference_image_id ? (
                        <div className={style.foto}>
                            <img 
                                src={`https://cdn2.thedogapi.com/images/${pet.reference_image_id}.jpg`} 
                            />
                        </div>
                    ) : (
                        <p>Imagem não disponível</p>
                    )}
                    <div className={style.textos}>
                        <p><strong>Nome:</strong> {pet.name}</p>
                        <p><strong>Idade Média:</strong> {pet.life_span}</p>
                        <p><strong>Origem:</strong> {pet.origin || "Desconhecida"}</p>
                        <p><strong>Temperamento:</strong> {pet.temperament}</p>
                    </div>
                    <div className={style.idPet}>
                        <p>{pet.id}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default Card;
