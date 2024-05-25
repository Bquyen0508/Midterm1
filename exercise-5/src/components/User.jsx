export default function User({ user }) {
  return (
    <div className="card" key={user.id}>
      <h4>Name: {user.name}</h4>
      <smal>Class: {user.class}</smal>
      <p>My hobby: {user.hobbies}</p>
      <img src={user.image.src} alt={user.image.alt} />
    </div>
  );
}
