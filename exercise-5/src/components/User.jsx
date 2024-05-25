export default function User({ user }) {
  return (
    <div className="card" key={user.id}>
      <h4>{user.name}</h4>
      <smal>{user.class}</smal>
      <p>{user.hobbies}</p>
      {/* <img src={user.image.src} alt={user.image.alt} /> */}
    </div>
  );
}
