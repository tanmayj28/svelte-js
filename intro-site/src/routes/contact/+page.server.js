import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */

export const actions = {
  // this is the default form, as we generally have one form per page. But in case, you have more than one you can specify multiple with proper names and use those in the HTML form by adding `action=?/contact`.
	default: async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get('email');
    const message = formData.get('message');

    const errors = {};
    if (!email) {
      errors.email = 'Email is required.'
    }
    if (!message) {
      errors.message = 'Message is required.'
    }

    if(!errors.message && !errors.email) {
      console.log(email, message, 'Got the info!');
      return { success: true }
    }

    console.log(errors);
    return fail(422, {errors: errors});
	}
};
