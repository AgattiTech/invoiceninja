<?php
/**
 * Invoice Ninja (https://clientninja.com).
 *
 * @link https://github.com/clientninja/clientninja source repository
 *
 * @copyright Copyright (c) 2022. client Ninja LLC (https://clientninja.com)
 *
 * @license https://www.elastic.co/licensing/elastic-license
 */

namespace App\Import\Transformer\Zoho;

use App\Import\ImportException;
use App\Import\Transformer\BaseTransformer;
use Illuminate\Support\Str;

/**
 * Class ClientTransformer.
 */
class ClientTransformer extends BaseTransformer {
	/**
	 * @param $data
	 *
	 * @return array|bool
	 */
	public function transform( $data ) {
		if ( isset( $data['Company Name'] ) && $this->hasClient( $data['Company Name'] ) ) {
			throw new ImportException( 'Client already exists' );
		}

		$settings              = new \stdClass;
		$settings->currency_id = (string) $this->getCurrencyByCode( $data, 'Currency' );

		if ( strval( $data['Payment Terms'] ?? '' ) > 0 ) {
			$settings->payment_terms = $data['Payment Terms'];
		}

		return [
			'company_id'    => $this->company->id,
			'name'          => $this->getString( $data, 'Company Name' ),
			'phone'    		=> $this->getString( $data, 'Phone' ),
			'private_notes' => $this->getString( $data, 'Notes' ),
			'website'       => $this->getString( $data, 'Website' ),
			'id_number'		=> $this->getString( $data, 'Customer ID'),
			'address1'    => $this->getString( $data, 'Billing Address' ),
			'address2'    => $this->getString( $data, 'Billing Street2' ),
			'city'        => $this->getString( $data, 'Billing City' ),
			'state'       => $this->getString( $data, 'Billing State' ),
			'postal_code' => $this->getString( $data, 'Billing Code' ),
			'country_id'  => isset( $data['Billing Country'] ) ? $this->getCountryId( $data['Billing Country'] ) : null,

			'shipping_address1'    => $this->getString( $data, 'Shipping Address' ),
			'shipping_address2'    => $this->getString( $data, 'Shipping Street2' ),
			'shipping_city'        => $this->getString( $data, 'Shipping City' ),
			'shipping_state'       => $this->getString( $data, 'Shipping State' ),
			'shipping_postal_code' => $this->getString( $data, 'Shipping Code' ),
			'shipping_country_id'  => isset( $data['Shipping Country'] ) ? $this->getCountryId( $data['Shipping Country'] ) : null,
			'credit_balance' => 0,
			'settings'       => $settings,
			'client_hash'    => Str::random( 40 ),
			'contacts'       => [
				[
					'first_name' => $this->getString( $data, 'First Name' ),
					'last_name'  => $this->getString( $data, 'Last Name' ),
					'email'      => $this->getString( $data, 'EmailID' ),
					'phone'      => $this->getString( $data, 'Phone' ),
				],
			],
		];
	}
}