'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Badge, { badgeClasses } from '@mui/material/Badge';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import CloseIcon from '@mui/icons-material/Close';
import PersonIcon from '@mui/icons-material/Person';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useTheme } from '@/app/Context/Context';

const CartBadge = styled(Badge)`
  & .${badgeClasses.badge} {
    top: -13px;
    right: 3px;
  }
`;

const Navigation = () => {
  const { isOpenAuth, setIsOpenAuth } = useTheme();
  const [openDrawer, setOpenDrawer] = useState(false);

  const toggleDrawer = (open) => () => {
	setOpenDrawer(open);
  };
  

  return (
    <nav className="flex justify-between items-center px-4 md:px-8 py-4 md:py-6 border-b border-[#46A35880]">
      <div className="flex items-center">
        <Link href="/home">
          <img src="/logo.png" alt="Logo" className="w-[120px] cursor-pointer hover:opacity-80 transition-all" />
        </Link>
      </div>

      <ul className="hidden md:flex items-center gap-6 lg:gap-12 text-[#3D3D3D] font-medium text-[16px]">
        <li>
          <Link href="/home" className="hover:text-[#46A358] transition-all">
            Home
          </Link>
        </li>
        <li>
          <Link href="/blog" className="hover:text-[#46A358] transition-all">
            Blog
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-5">
        <IconButton className="hover:text-[#46A358] transition-all">
          <SearchIcon sx={{ fontSize: 28 }} />
        </IconButton>

        <IconButton className="relative hover:text-[#46A358] transition-all">
          <CartBadge badgeContent={1} color="error" overlap="circular">
            <ShoppingCartIcon sx={{ fontSize: 28 }} />
          </CartBadge>
        </IconButton>

        <div className="hidden md:block">
          <Button
            variant="contained"
            color="primary"
            sx={{
              bgcolor: '#46A358',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              gap: '8px',
              borderRadius: '8px',
              '&:hover': {
                bgcolor: '#3e944c',
              },
            }}
            onClick={() => setIsOpenAuth(true)}
          >
            <LoginIcon /> Login
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="block md:hidden">
          <IconButton className="hover:text-[#46A358] transition-all" onClick={toggleDrawer(true)}>
            <MenuIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </div>
      </div>

      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <div className="w-[280px] p-5 flex flex-col gap-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[20px] font-bold">Site map</h2>
            <IconButton onClick={toggleDrawer(false)}>
              <CloseIcon />
            </IconButton>
          </div>

          <Link href="/home" className="text-[18px] hover:text-[#46A358]" onClick={toggleDrawer(false)}>
            Home
          </Link>
          <Link href="/blog" className="text-[18px] hover:text-[#46A358]" onClick={toggleDrawer(false)}>
            Blog
          </Link>

          <div className="mt-4">
            <h3 className="text-[18px] font-bold text-[#46A358] mb-2">Profile</h3>
            <ul className="flex flex-col gap-3 text-[16px]">
              <li className="flex items-center gap-2 hover:text-[#46A358]">
                <PersonIcon fontSize="small" /> <Link href="#">Account Details</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#46A358]">
                <Inventory2Icon fontSize="small" /> <Link href="#">My Products</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#46A358]">
                <LocationOnIcon fontSize="small" /> <Link href="#">Address</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#46A358]">
                <FavoriteBorderIcon fontSize="small" /> <Link href="#">Wishlist</Link>
              </li>
              <li className="flex items-center gap-2 hover:text-[#46A358]">
                <AccessTimeIcon fontSize="small" /> <Link href="#">Track Order</Link>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <Button
              variant="contained"
              fullWidth
              sx={{
                bgcolor: '#46A358',
                textTransform: 'capitalize',
                fontWeight: 'bold',
                borderRadius: '8px',
                '&:hover': {
                  bgcolor: '#3e944c',
                },
              }}
            >
              Muhammaddiyor
            </Button>
          </div>
        </div>
      </Drawer>
    </nav>
  );
};

export default Navigation;
