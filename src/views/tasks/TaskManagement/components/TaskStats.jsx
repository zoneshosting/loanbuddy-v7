```jsx
import { Grid, Paper, Typography, Box } from '@mui/material';
import { IconClipboardCheck, IconAlertTriangle, IconClock } from '@tabler/icons-react';

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

const TaskStats = () => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Completed Tasks"
          value="45"
          subtitle="Last 30 days"
          icon={IconClipboardCheck}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Overdue Tasks"
          value="8"
          subtitle="Requires attention"
          icon={IconAlertTriangle}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <StatCard
          title="Due Today"
          value="12"
          subtitle="Tasks to complete"
          icon={IconClock}
        />
      </Grid>
    </Grid>
  );
};

export default TaskStats;
```