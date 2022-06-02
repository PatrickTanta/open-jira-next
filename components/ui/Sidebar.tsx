import { MailOutlined, InboxOutlined } from '@mui/icons-material';
import { Box, Divider, Drawer, List, ListItem, ListItemIcon, Typography } from '@mui/material';
import { useContext } from 'react';
import { UIContext } from '../../context/ui';

const menuItems: string[] = ['Inbox', 'Starred', 'Send email', 'Drafts']

export const Sidebar = () => {

  const { sidemenuOpen, closeSideMenu } = useContext(UIContext)

  return (
    <Drawer
      anchor='left'
      open={ sidemenuOpen }
      onClose={ closeSideMenu }
    >
      <Box sx={{ width: 250 }}>

        <Box sx={{ padding: '5px 10px' }}>
          <Typography variant='h4'>Menu</Typography>
        </Box>

        <List>
          {
            menuItems.map((text, index) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 ? <InboxOutlined /> : <MailOutlined /> }
                </ListItemIcon>
                { text }
              </ListItem>
            ))
          }
        </List>

        <Divider />

        <List>
          {
            menuItems.map((text, index) => (
              <ListItem button key={ text }>
                <ListItemIcon>
                  { index % 2 ? <InboxOutlined /> : <MailOutlined /> }
                </ListItemIcon>
                { text }
              </ListItem>
            ))
          }
        </List>

      </Box>
    </Drawer>
  )
}
