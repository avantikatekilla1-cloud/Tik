self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', (event) => {
	event.waitUntil(self.clients.claim());
});

// Opcional: resposta rápida para requisições navegacionais
self.addEventListener('fetch', (event) => {
	if (event.request.mode === 'navigate') {
		return; // deixa a rede responder normalmente
	}
});


