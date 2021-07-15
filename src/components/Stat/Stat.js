import React, {useState} from 'react'

const Stat = () => {

    const [loses, setLoses] = useState(0);
    const [wins, setWins] = useState(0);

    return (
        <>
            <p><b>Статистика:</b></p>
            <p>Ошибки - { loses }</p>
            <p>Победы - { wins }</p>
        </>
    )
}

export default Stat;