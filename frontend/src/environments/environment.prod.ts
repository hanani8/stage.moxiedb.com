export const sadminEnvironment = {
  production: true,

  sso_api_username: '7elt7v1gnt5ov610jr5ojrie9j',
  sso_api_pwd: '17p2f2dalafughtubvol5pep05a31981hhlddevedo8ak2fh0c0k',

  loginURL: 'https://sadmin-moxie.auth.us-east-2.amazoncognito.com/login?client_id=7elt7v1gnt5ov610jr5ojrie9j&response_type=code&scope=email+openid+profile&redirect_uri=https://stage.moxiedb.com/sadmin-utility',

  redirectURL: 'https://stage.moxiedb.com/sadmin-utility',

  cognitoTokenURL: 'https://sadmin-moxie.auth.us-east-2.amazoncognito.com/oauth2/token',

  logout: 'https://sadmin-moxie.auth.us-east-2.amazoncognito.com/login?' + 'client_id=7elt7v1gnt5ov610jr5ojrie9j' + 'logout_url=https://moxiedb.com',

}

export const adminEnvironment = {
  production: true,

  sso_api_username: '3b0ib0kfo4n4km2k2i0g31hc8u',
  sso_api_pwd: 'a6tfcsv09mktpbhe0o1ropa5ki61ibnhq0dk3bj28g4rqlm9ue9',

  loginURL: 'https://moxiedb-admin.auth.us-east-2.amazoncognito.com/login?client_id=3b0ib0kfo4n4km2k2i0g31hc8u&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/admin-utility',

  redirectURL: 'https://stage.moxiedb.com/admin-utility',

  cognitoTokenURL: 'https://moxiedb-admin.auth.us-east-2.amazoncognito.com/oauth2/token',

  logout: 'https://moxiedb-admin.auth.us-east-2.amazoncognito.com/login?' + 'client_id=3b0ib0kfo4n4km2k2i0g31hc8u' + 'logout_url=https://moxiedb.com',

}

export const iUserEnvironment = {
  production: true,

  sso_api_username: '6tgfkisrs55u5ovgv6dt1h8hbu',
  sso_api_pwd: '15qdb9o7ccg66la4h3315q9q3rbfduelpuv2afmd9j865o8pcnvl',

  loginURL: 'https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=6tgfkisrs55u5ovgv6dt1h8hbu&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/iuser-utility',

  redirectURL: 'https://stage.moxiedb.com/iuser-utility',

  cognitoTokenURL: 'https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/oauth2/token',

  logout: 'https://iuser-moxiedb.auth.us-east-2.amazoncognito.com/login?' + 'client_id=6tgfkisrs55u5ovgv6dt1h8hbu' + 'logout_url=https://moxiedb.com',

}

export const xUserEnvironment = {
  production: true,

  sso_api_username: '531teggr74n1fnpba8epi4cea2',
  sso_api_pwd: '1lrhu34ujoe4l1qkva1odnoo12ssrnm9hbj00emq3u4k9hkb3mu6',

  loginURL: 'https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/login?client_id=531teggr74n1fnpba8epi4cea2&response_type=code&scope=openid+profile&redirect_uri=https://stage.moxiedb.com/xuser-utility',

  redirectURL: 'https://stage.moxiedb.com/xuser-utility',

  cognitoTokenURL: 'https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/oauth2/token',

  logout: 'https://xuser-moxiedb.auth.us-east-2.amazoncognito.com/login?' + 'client_id=531teggr74n1fnpba8epi4cea2' + 'logout_url=https://moxiedb.com',

}
