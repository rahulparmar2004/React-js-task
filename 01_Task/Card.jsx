const Card = ({ users }) => {
    return (
        <div className="card">
            {/* TOP */}
            <div className="card-top">
                <img src={users.img} alt="Profile" className="profile-img" />
            </div>

            {/* CENTER */}
            <div className="card-center">
                <h1>{users.name}</h1>
                <p className="role">{users.role}</p>
                <p className="tech">{users.tech}</p>

                <div className="social-icons">
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://instagram.com/" target="_blank" rel="noreferrer">
                        <i className="fa-brands fa-instagram"></i>
                    </a>
                </div>

                <button className="msg-btn">Message</button>
            </div>

            {/* BOTTOM */}
            <div className="card-bottom">
                <p>📞 {users.phone}</p>
                <p>
                    ✉️ <a href={`mailto:${users.email}`}>{users.email}</a>
                </p>
            </div>
        </div>
    );
};

export default Card;
