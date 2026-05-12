exports.handler = async function () {
  const url =
    "http://si-12625.dg.vg:8080/feed/dedicated-server-stats.xml?code=6bqwp6ka35e99sng7izc3gly1r2h";

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Erreur serveur XML");
    }

    const xml = await response.text();

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/xml",
        "Access-Control-Allow-Origin": "*"
      },
      body: xml
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Impossible de récupérer le XML",
        details: error.message
      })
    };
  }
};