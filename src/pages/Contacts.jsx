import React from 'react'

const Contacts = () => {
    return (
        <main className="section">
            <div className="container">
                <h1 className="title-1">Contacts</h1>

                <ul className="content-list">
                    <li className="content-list__item">
                        <h2 className="title-2">Location</h2>
                        <p>Tashkent, Uzbekistan</p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Telegram / WhatsApp</h2>
                        <p><a href="tel:+99894675254">+998 (94) 675-52-54</a></p>
                    </li>
                    <li className="content-list__item">
                        <h2 className="title-2">Email</h2>
                        <p><a href="mailto:shahzodtashev49@gmail.com">shahzodtashev49@gmail.com</a></p>
                    </li>
                </ul>

            </div>
        </main>
    )
}

export default Contacts