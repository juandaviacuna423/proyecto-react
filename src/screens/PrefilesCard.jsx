import Prefiles from '../CardPrefiles/Prefiles'

const profiles = [
  {
    name: "Sophie Bennett",
    description: "Product Designer who focuses on simplicity & usability.",
    followers: 312,
    posts: 48,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop"
  },
  {
    name: "Sophie Bennett",
    description: "Product Designer who focuses on simplicity & usability.",
    followers: 312,
    posts: 48,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop"
  },
  {
    name: "Sophie Bennett",
    description: "A Product Designer focused on intuitive user experiences.",
    followers: 312,
    posts: 48,
    verified: true,
    imageUrl: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop"
  }
]

export default function PrefilesCard() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#e5e5e5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '24px',
      flexWrap: 'wrap',
      padding: '40px'
    }}>
      {profiles.map((profile, index) => (
        <Prefiles
          key={index}
          {...profile}
          onFollow={() => console.log("Follow clicked", profile.name)}
        />
      ))}
    </div>
  )
}