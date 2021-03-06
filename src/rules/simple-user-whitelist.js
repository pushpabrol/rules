/**
 * @overview Only allow access to users with specific whitelist email addresses
 * @gallery true
 * @category access control
 *
 * Whitelist
 *
 * This rule will only allow access to users with specific email addresses.
 */

function (user, context, callback) {
  const whitelist = [ 'user1@example.com', 'user2@example.com' ]; //authorized users
  const userHasAccess = whitelist.some(
    function (email) {
      return email === user.email;
    });

  if (!userHasAccess) {
    return callback(new UnauthorizedError('Access denied.'));
  }

  callback(null, user, context);
}
