import { CvrSearch } from "./Components/CvrSearch";
import { IInputs, IOutputs } from "./generated/ManifestTypes";
import { ICvrProps } from "./Interfaces/CVRInterface";
import React = require("react");
import ReactDOM = require("react-dom");

export class CVRSearch implements ComponentFramework.StandardControl<IInputs, IOutputs> {

	private localNotifyOutputChanged: () => void;
	private _context: ComponentFramework.Context<IInputs>;
	private _container: HTMLDivElement;
	private countryCode: string;

	private name: string;
	private address: string;
	private city: string;
	private zipCode: string;
	private startDate: string;
	private email: string;
	private phone: string;
	private cvr: string
	

	private outPutFunction(name: string, cvr: string, address: string, city: string, zipcode: string, startDate: string, email: string, phone: string) {
		this.name = name;
		this.address = address;
		this.city = city;
		this.zipCode = zipcode;
		this.startDate = startDate;
		this.email = email;
		this.phone = phone;
		this.cvr = cvr;
		this.localNotifyOutputChanged();
	}
	/**
	 * Empty constructor.
	 */
	constructor()
	{

	}

	/**
	 * Used to initialize the control instance. Controls can kick off remote server calls and other initialization actions here.
	 * Data-set values are not initialized here, use updateView.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to property names defined in the manifest, as well as utility functions.
	 * @param notifyOutputChanged A callback method to alert the framework that the control has new outputs ready to be retrieved asynchronously.
	 * @param state A piece of data that persists in one session for a single user. Can be set at any point in a controls life cycle by calling 'setControlState' in the Mode interface.
	 * @param container If a control is marked control-type='standard', it will receive an empty div element within which it can render its content.
	 */
	public init(context: ComponentFramework.Context<IInputs>, notifyOutputChanged: () => void, state: ComponentFramework.Dictionary, container:HTMLDivElement): void
	{
		this._container = container;
		this._context = context;
		this.countryCode = (context.parameters.CountryCode.raw === null) ? "DK" : context.parameters.CountryCode.raw;
		this.localNotifyOutputChanged = notifyOutputChanged;

		let props: ICvrProps = {
			context: this._context,
			countryCode: this.countryCode,
			outPutFunction: this.outPutFunction.bind(this)
		};
		
		ReactDOM.render(
			React.createElement(
				CvrSearch,
				props
			),
			this._container
		);
		
	}


	/**
	 * Called when any value in the property bag has changed. This includes field values, data-sets, global values such as container height and width, offline status, control metadata values such as label, visible, etc.
	 * @param context The entire property bag available to control via Context Object; It contains values as set up by the customizer mapped to names defined in the manifest, as well as utility functions
	 */
	public updateView(context: ComponentFramework.Context<IInputs>): void
	{
		// Add code to update control view
	}

	/**
	 * It is called by the framework prior to a control receiving new data.
	 * @returns an object based on nomenclature defined in manifest, expecting object[s] for property marked as “bound” or “output”
	 */
	public getOutputs(): IOutputs
	{
		return {
			Name: this.name,
			address: this.address,
			City: this.city,
			Email: this.email,
			zipcode: this.zipCode,
			CVR: this.cvr
		};
	}

	/**
	 * Called when the control is to be removed from the DOM tree. Controls should use this call for cleanup.
	 * i.e. cancelling any pending remote calls, removing listeners, etc.
	 */
	public destroy(): void
	{
		ReactDOM.unmountComponentAtNode(this._container);
	}
}
