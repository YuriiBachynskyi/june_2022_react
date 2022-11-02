export default function User(props) {
    let {user} = props;
    return (
        <div>
            <h1>{user.id}{user.name}</h1>
            <p>{user.address.city} <br/> {user.email}</p>
        </div>
    );
}