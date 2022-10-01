describe('Agregar, leer y modificar información de mascota', () => {
	it('Agregar información de mascota', () => {
		cy.request({
			method: 'POST',
			url: 'https://petstore.swagger.io/v2/pet',
			body: {
				id: 1633,
				category: {
					id: 0,
					name: 'pet',
				},
				name: 'coco',
				photoUrls: ['string'],
				tags: [
					{
						id: 0,
						name: 'pet',
					},
				],
				status: 'available',
			},
		}).then((response) => {
			expect(response).to.be.an('object')
			expect(response.status).to.eql(200)
			expect(response.body.name).to.eql('coco')
		})
		})
	it('Leer información de mascota', () => {
			cy.request({
				method: 'GET',
				url: 'https://petstore.swagger.io/v2/pet/1633',
				headers: {
					status: 'available',
				},
			}).then((response) => {
				expect(response).to.be.an('object')
				expect(response.status).to.eql(200)
				expect(response.body.name).to.eql('coco')
			})
		})

	it('Modificar información de mascota', () => {
			cy.request({
				method: 'PUT',
				url: 'https://petstore.swagger.io/v2/pet',
				body: {
					id: 1633,
					category: {
						id: 0,
						name: 'string',
					},
					name: 'coco2',
					photoUrls: ['string'],
					tags: [
						{
							id: 0,
							name: 'string',
						},
					],
					status: 'available',
				},
			}).then((response) => {
				expect(response).to.be.an('object')
				expect(response.status).to.eql(200)
				expect(response.body.name).to.eql('coco2')
			})
		})
	})

