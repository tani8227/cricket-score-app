import React, { useState } from 'react';
import{
  Box,
  Grid,
  Typography,
  Card,
  CardContent,
  Button,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Tabs,
  Tab,
  Paper
} from '@mui/material';

const Admin = () => {
  const [tab, setTab] = useState(0);
  const [striker, setStriker] = useState('');
  const [nonStriker, setNonStriker] = useState('');
  const [bowler, setBowler] = useState('');

  const gridButtons = [
    { label: "Ball Start", color: "success" },
    { label: "0", color: "primary" },
    { label: "1", color: "primary" },
    { label: "Wicket", color: "error" },

    { label: "Wide", color: "warning" },
    { label: "2", color: "info" },
    { label: "6", color: "default" },
    { label: "4", color: "success" },

    { label: "No Ball", color: "primary" },
    { label: "Bowler Stop", color: "secondary" },
    { label: "1 or 2", color: "secondary" },
    { label: "2 or 4", color: "secondary" },
    { label: "4 or 6", color: "warning" },
    { label: "Ball In Air", color: "secondary" },

    { label: "Others", color: "primary" },
    { label: "3", color: "secondary" },
    { label: "Boundary Check", color: "info" },
    { label: "Appeal", color: "default" },
    { label: "Catch Drop", color: "info" },

    { label: "Leg Bye", color: "info" },
    { label: "Bye", color: "success" },
    { label: "Third Umpire", color: "default" },
    { label: "Review", color: "error" },

    { label: "Done", color: "success" },
    { label: "Misfield", color: "primary" },
    { label: "Overthrow", color: "secondary" },
    { label: "Wicket Confirm", color: "error" },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <Tabs value={tab} onChange={(e, val) => setTab(val)}>
        <Tab label="Settings" />
        <Tab label="Match Commentary" />
      </Tabs>

      <Grid container spacing={2} mt={1}>
        <Grid item xs={12} sm={6} sx={{ width: "160px" }}>
          <FormControl fullWidth>
            <InputLabel id="striker-label">Batsman (Striker)</InputLabel>
            <Select
              labelId="striker-label"
              id="striker"
              value={striker}
              label="Batsman (Striker)"
              onChange={(e) => setStriker(e.target.value)}

            >
              <MenuItem value="Kalis">Sterre Kalis</MenuItem>
              <MenuItem value="Suzie">Suzie Bates</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={12} sm={4} sx={{ width: "200px" }}>
          <FormControl fullWidth>
            <InputLabel id="non-striker-label">Batsman (Non-Striker)</InputLabel>
            <Select
              labelId="striker-label"
              id="striker"
              value={nonStriker}
              label="Batsman (Striker)"
              onChange={(e) => setNonStriker(e.target.value)}
            >
              <MenuItem value="Suzie">Suzie Bates</MenuItem>
              <MenuItem value="Kalis">Sterre Kalis</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ width: "100px" }}>
          <FormControl fullWidth>
            <InputLabel id="bowler-label">Bowler</InputLabel>
            <Select
              labelId="bowler-label"
              id="bowler"
              value={bowler}
              label="Bowler"
              onChange={(e) => setBowler(e.target.value)}
            >
              <MenuItem value="Kalis">Sterre Kalis</MenuItem>
              <MenuItem value="Suzie">Suzie Bates</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item xs={12} md={8} sx={{ backgroundColor: "pink", width: "65%" }}>
          <Grid container spacing={1}>
            {gridButtons.map((btn, i) => (
              <Grid item xs={6} sm={4} md={3} key={i}>
                <Button
                  variant="contained"
                  color={btn.color}
                  fullWidth
                  sx={{ height: 50 }}
                >
                  {btn.label}
                </Button>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: "100%" }}>
            <CardContent>
              <Typography variant="h6">Scorecard</Typography>
              <Typography>OW: 36/0 (Over 12)</Typography>
              <Typography>BPW: 41/0 (Over 11)</Typography>
              <Typography variant="body2" mt={2}>
                Birmingham Phoenix (Women) won by 10 wickets
              </Typography>


              <Box mt={2}>
                <Typography variant="subtitle2">Batsman</Typography>
                <Typography variant="body2">Sterre Kalis - 12 (4)</Typography>
                <Typography variant="body2">Suzie Bates - 24 (7)</Typography>
              </Box>


              <Box mt={2}>
                <Typography variant="subtitle2">Bowler</Typography>
                <Typography variant="body2">Mady Villiers - 1.1 overs, 0 runs</Typography>
              </Box>


              <Box mt={2}>
                <Typography variant="subtitle2">Ball Log</Typography>
                <Paper variant="outlined" sx={{ p: 1, fontSize: 12 }}>
                  1.1: 2 runs<br />
                  1.2: 2 runs<br />
                  1.3: Wide<br />
                  1.4: 2 runs
                </Paper>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Admin;
