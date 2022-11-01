import './User.css'

function User(props) {

    let {name,age} = props

    return (
        <div>
            <h2>{name}</h2>
            <p>{age}</p>
        </div>
    );

}

export {User};
