// src/modules/home/components/GoogleMap.tsx
import { Card, CardContent, Typography } from "@mui/material";
import React from "react";

interface GoogleMapCardProps {
  srcMap: string;
  titleCard?: string;
  titleMap?: string;
  sx?: object;
}
export const GoogleMapCard: React.FC<GoogleMapCardProps> = ({srcMap = "", titleCard = "", titleMap = "", sx = {}}) => {
  return (
    <Card sx={{ ...sx }}>
      <CardContent 
        sx={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        {titleCard && 
          <Typography variant="h6" gutterBottom>
            {titleMap}
          </Typography>
        }
          <iframe
            src={srcMap}
            title={titleMap}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              border: 0,
              width: "100%",
              height: "100%",
            }}
          />
      </CardContent>
    </Card>
  );
};
