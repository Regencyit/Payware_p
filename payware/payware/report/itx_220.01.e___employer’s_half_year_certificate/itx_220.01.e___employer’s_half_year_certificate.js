// Copyright (c) 2016, Aakvatech and contributors
// For license information, please see license.txt
/* eslint-disable */

frappe.query_reports["ITX 220.01.E - Employer’s Half Year Certificate"] = {
        "filters": [
			{
				"fieldname":"from_date",
				"label": __("From Date"),
				"fieldtype": "Date",
				"default": frappe.datetime.add_months(frappe.datetime.get_today(), -1),
				"reqd": 1,
				"width": "60px"
			},
			{
				"fieldname":"to_date",
				"label": __("To Date"),
				"fieldtype": "Date",
				"default": frappe.datetime.get_today(),
				"reqd": 1,
				"width": "60px"
			}
        ]
}
