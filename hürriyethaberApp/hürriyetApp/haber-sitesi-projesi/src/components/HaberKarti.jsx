import React from "react";
import { Card, Button } from "react-bootstrap";

function HaberKarti({ baslik, ozet, resimUrl, kategori }) {
  const handleHabereGit = () => {
    alert(`Şu habere gidiliyor: "${baslik}"`);
  };
  return (
    <Card className="h-100 ">
      <Card.Img
        variant="top"
        src={resimUrl}
        alt={baslik}
        style={{ height: "180px", objectFit: "cover" }}
      />

      <Card.Body>
        <p className="text-danger small mb-1" style={{ fontWeight: 700 }}>
          {kategori.toUpperCase()}
        </p>

        <Card.Title style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          {baslik}
        </Card.Title>

        <Card.Text className="text-muted">{ozet}</Card.Text>

        <Button variant="outline-danger" size="sm" onClick={handleHabereGit}>
          Habere Git
        </Button>
      </Card.Body>
    </Card>
  );
}

export default HaberKarti;
