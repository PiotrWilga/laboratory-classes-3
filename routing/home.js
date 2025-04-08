const express = require("express");
const router = express.Router();

const MENU_LINKS = [
  { path: '/product/add', label: 'Add product' },
  { path: '/product/new', label: 'Newest product' },
  { path: '/logout', label: 'Logout' }
];

router.get("/", (_request, response) => {
  response.render("home", {
    headTitle: "Home Page",
    MENU_LINKS: MENU_LINKS,  // Przekazanie MENU_LINKS do widoku
    activeLinkPath: '/'  // Przekazanie aktywnej ścieżki
  });
});

module.exports = router;
