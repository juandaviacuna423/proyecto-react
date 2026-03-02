const Prefiles = ({
  name = "Sophie Bennett",
  description = "Product Designer who focuses on simplicity & usability.",
  followers = 312,
  posts = 48,
  verified = true,
  imageUrl = "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=400&h=400&fit=crop",
  onFollow,
  overlay = false,
}) => {
  return (
    <div style={{
      background: "#ffffff",
      borderRadius: "28px",
      width: "260px",
      overflow: "hidden",
      boxShadow: "0 8px 32px rgba(0,0,0,0.12)"
    }}>
      <div style={{ position: "relative" }}>
        <img
          src={imageUrl}
          alt={name}
          style={{
            width: "100%",
            height: "300px",
            objectFit: "cover",
            display: "block"
          }}
        />
        {overlay && (
          <>
            <div style={{
              position: "absolute",
              bottom: 0, left: 0, right: 0,
              height: "150px",
              background: "linear-gradient(transparent, rgba(0,0,0,0.7))"
            }} />
            <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                <h2 style={{ fontSize: "1.1rem", margin: 0, color: "white", fontWeight: "700" }}>{name}</h2>
                {verified && <span>✔️</span>}
              </div>
              <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.82rem", margin: "4px 0 0" }}>{description}</p>
            </div>
          </>
        )}
      </div>

      {!overlay && (
        <div style={{ padding: "16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "6px" }}>
            <h2 style={{ fontSize: "1.1rem", margin: 0, color: "#111", fontWeight: "700" }}>{name}</h2>
            {verified && <span>✅</span>}
          </div>
          <p style={{ color: "#888", fontSize: "0.85rem", margin: "0 0 16px" }}>{description}</p>
        </div>
      )}

      <div style={{
        display: "flex",
        alignItems: "center",
        padding: "0 16px 16px",
        gap: "12px"
      }}>
        <span style={{ fontSize: "0.82rem", color: overlay ? "white" : "#555" }}>👤 {followers}</span>
        <span style={{ fontSize: "0.82rem", color: overlay ? "white" : "#555" }}>🖼 {posts}</span>
        <button onClick={onFollow} style={{
          marginLeft: "auto",
          padding: "10px 20px",
          borderRadius: "50px",
          border: "1px solid #ddd",
          backgroundColor: "white",
          cursor: "pointer",
          fontWeight: "600",
          fontSize: "0.85rem",
          color: "#111"
        }}>
          Follow +
        </button>
      </div>
    </div>
  );
};

export default Prefiles;