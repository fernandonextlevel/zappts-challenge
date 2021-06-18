import { ComponentFactoryResolver, Injectable, Inject } from '@angular/core'

@Injectable()
export class TemplateService {

	rootViewContainer: any

	constructor(@Inject(ComponentFactoryResolver) public factoryResolver) {

	}

	setRootViewContainerRef(viewContainerRef) {
		this.rootViewContainer = viewContainerRef
	}

	loadTemplate(template) {
		this.rootViewContainer.clear()
		const component = this.factoryResolver
			.resolveComponentFactory(template)
			.create(this.rootViewContainer.parentInjector)
		this.rootViewContainer.insert(component.hostView)
		window.scrollTo(0, 0)
	}
}