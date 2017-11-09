<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'sia_db');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '^<7:0`Hxy[E0wZT2$kIa_7H~I(?4Z_7Z39Tcm=MaZH?-{Px2ruuNZ/T[V<AXe<m=');
define('SECURE_AUTH_KEY',  '(:Z#~-nV~L`5^GATW6?Db[D1~!^&Uv!s9#sh[ks/eFfDwPF(F3><9K#~GJAgx~aC');
define('LOGGED_IN_KEY',    'R=N[{IGt_~z#@EhQoyI.Nz%C66{8~;1WP^-*VE*K]Qr@r@$k-$_*RIepDN]R^)hE');
define('NONCE_KEY',        'RzqE-`0^w:LNV+l}BG:v.SC+wPA<X&xnF|:0e,hk^e8)ShF=*2)o<35caV;7^wkh');
define('AUTH_SALT',        '{I$kGr>[19pqlt1emiZ nNd/ H{.%k6eT/Gp~#]0dxYWT>%Uhm&IH3JzvYE`h?$X');
define('SECURE_AUTH_SALT', '/DY0kdvL?. 95FqQy(Sfo7h$q:XxW5n{r|o%By$})S+f?F0=)XWh^$oP#rc.S}=f');
define('LOGGED_IN_SALT',   'gDg5@;.NH$/L4V&d&T_RqKd*:j3#((x~r~G8LNxth@nj13q!23WtlsY40<6=glK)');
define('NONCE_SALT',       'L6G=Bu~pWutkzUHW]-B5``|~@{dx27Hfjxh7TPY^C+Il$woF+R=tD_[XUnQ9noio');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
