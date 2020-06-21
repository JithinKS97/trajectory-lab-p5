const rootUrl = "http://localhost:3000";

async function saveSystem(data = {}) {
  // Default options are marked with *
  const response = await fetch(`${rootUrl}/save-system`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

async function loadSystem(data = {}) {
  // Default options are marked with *
  const response = await fetch(`${rootUrl}/load-system`, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, *cors, same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    body: JSON.stringify(data), // body data type must match "Content-Type" header
  });
  return response.json(); // parses JSON response into native JavaScript objects
}

function restoreSystem({
  sources: loadedSources,
  testParticle: loadedTestParticle,
}) {
  sources.sources = [];
  loadedSources.map((loadedSource) => {
    sources.addViaValues(
      new Source({
        x: loadedSource.pos[0],
        y: loadedSource.pos[1],
        s: loadedSource.size,
        fill: loadedSource.fill,
      })
    );
  });
  testParticle.setPos({
    x: loadedTestParticle.pos[0],
    y: loadedTestParticle.pos[1],
  });
  testParticle.setVel({
    x: loadedTestParticle.vel[0],
    y: loadedTestParticle.vel[1],
  });
  trajectoryTracer.sources = sources.getAllSources();
  trajectoryTracer.testParticle = testParticle;
}
