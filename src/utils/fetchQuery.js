export async function fetchQuery({
  headers,
  query,
  variables,
}) {
  try {

    let woocommerce = localStorage.getItem('woocommerce-session')
    const newheaders = {
      'Content-Type': 'application/json',
      ...headers
    }

    if (woocommerce) newheaders['woocommerce-session'] = `Session ${woocommerce}`

    const result = await fetch('https://wloskiodzera.headlesshub.com/graphql', {
      method: 'POST',
      headers: newheaders,
      body: JSON.stringify({
        ...(query && { query }),
        ...(variables && { variables })
      }),
    });

    const woo = result.headers.get('woocommerce-session')
    if(woo) localStorage.setItem('woocommerce-session', woo)

    const body = await result.json();

    if (body.errors) {
      throw body.errors[0];
    }

    return {
      status: result.status,
      body
    };
  } catch (e) {
    throw {
      status: e.status || 500,
      message: e.message,
      query
    };
  }
}