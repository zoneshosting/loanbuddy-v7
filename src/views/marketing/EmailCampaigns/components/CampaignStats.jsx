```jsx
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconMail, IconUsers, IconClick } from '@tabler/icons-react';

const StatCard = ({ title, value, subtitle, icon: Icon }) => (
  <Paper sx={{ p: 2 }}>
    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
      <Box 
        sx={{ 
          p: 1.5, 
          borderRadius: 2, 
          bgcolor: 'primary.light',
          color: 'primary.dark',
          mr: 2 
        }}
      >
        <Icon size={24} />
      </Box>
      <Typography variant="h6">{title}</Typography>
    </Box>
    <Typography variant="h4" gutterBottom>{value}</Typography>
    <Typography variant="body2" color="textSecondary">{subtitle}</Typography>
  </Paper>
);

const CampaignStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Total Sent"
          value="12,845"
          subtitle="Last 30 days"
          icon={IconMail}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Open Rate"
          value="24.8%"
          subtitle="Industry avg: 21.5%"
          icon={IconUsers}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Click Rate"
          value="3.2%"
          subtitle="Industry avg: 2.5%"
          icon={IconClick}
        />
      </Grid>
    </Grid>
  );
};

export default CampaignStats;
```