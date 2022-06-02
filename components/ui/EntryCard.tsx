import { Card, CardActionArea, CardActions, CardContent, List, Paper, Typography } from "@mui/material"

export const EntryCard = () => {
  return (
    <Card sx={{ marginBottom: 1 }}>

      <CardActionArea>
        <CardContent>
          <Typography sx={{ whiteSpace: 'pre-line' }}>
            Esto es la descripcion
          </Typography>
        </CardContent>

        <CardActions sx={{ display: 'flex', justifyContent: 'end', paddingRight: '2px' }}>
          <Typography variant="body2" sx={{ whiteSpace: 'pre-line' }}>
            Hace 30 minutos
          </Typography>
        </CardActions>

      </CardActionArea>
    </Card>
  )
}
