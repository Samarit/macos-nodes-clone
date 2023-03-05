import AppBar from '@mui/material/AppBar'
import { alpha, InputBase, styled } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import DeleteButton from './DeleteButton';
import CreateButton from './CreateButton';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function TopBar() {
  return(
    <div className="topbar" 
      style={{
        gridColumn: '1 / -1'
      }}>
        <AppBar 
        position='static'
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between'
        }}>
          TopBar

          <CreateButton />
          <DeleteButton />

          <Search>
            <SearchIcon />
            <StyledInputBase placeholder='Поиск...'/>
          </Search>
        </AppBar>
      </div>
  )
}