import './DisplayTable.css';


const DisplayTable = () => {
    return (
        <>
            <div className='section'>
                <nav>
                    <img className='logo' src="/logo.svg" alt="Logo" />
                    <h1>Sprint32</h1>
                    <div className="user-resouces">
                        <div className="user">
                            <h2>lu</h2>
                        </div>
                        <button className='btn-players'>invitar jugadores</button>
                    </div>
                </nav>
                <main>
                    <div className='line1'>
                        <div className="line2">
                            <div className="line3"></div>
                        </div>
                    </div>
                    <div className="players orbit1">
                        <div className="tags-players">
                            <div className="player">
                                <div className="tag"></div>
                                <p>Hernesto</p>
                            </div>
                            <div className="player">
                                <div className="user">LU</div>
                                <p>Hernesto</p>
                            </div>
                            <div className="player">
                                <div className="tag"></div>
                                <p>Hernesto</p>
                            </div>
                        </div>
                    </div>
                    <div className="players orbit2">
                        <div className="tags-players">
                            <div className="player">
                                <div className="tag"></div>
                                <p>Hernesto</p>
                            </div>
                            <div className="player">
                                <div className="tag"></div>
                                <p>Hernesto</p>
                            </div>
                            <div className="player">
                                <div className="tag"></div>
                                <p>Hernesto</p>
                            </div>
                        </div>
                    </div>
                    <div className="players orbit3">
                        <div className="player">
                            <div className="tag"></div>
                            <p>Hernesto</p>
                        </div>
                    </div>
                    <div className="players orbit4">
                        <div className="player">
                            <div className="tag"></div>
                            <p>Hernesto</p>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default DisplayTable;