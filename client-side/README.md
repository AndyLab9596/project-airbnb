-- package:

- material UI
- react-router-dom
- redux
- react-redux
- redux-thunk
- axios

--

<div className={classes.filter__item}>
                            <button className={classes.filter__item__button} onClick={(event) => handleOpenPrice(event)}>
                                <span>Giá</span>
                            </button>
                        </div>

                        {/* Modal Price */}
                        <Menu
                            id="price-menu"
                            anchorReference="anchorPosition"
                            anchorPosition={{ top: 250, left: 10 }}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'center',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'center',
                            }}
                            anchorEl={anchorElPrice}
                            keepMounted
                            open={Boolean(anchorElPrice)}
                            onClose={handleClosePrice}
                            className={classes.rootPriceMenu}
                        >
                            <PriceMenu />
                        </Menu>
