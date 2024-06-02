import { fail } from '@sveltejs/kit';
/** @type {import('./$types').Actions} */

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const width = data.get('width') || 0;
    const height = data.get('height') || 0;
    const color = data.get('color');

    const errors = {};
    if(!width || width < 1) {
      errors.width = 'Please provide width > 0.'
    }

    if(!height || height < 1) {
      errors.height = 'Please provide height > 0.'
    }

    if(!color) {
      errors.color = 'Please provide color.'
    }

    if(!errors.width && !errors.height && !errors.color) {
      console.log(height, width, color, 'Got the info!');
      return { success: true, color: color, width: width, height: height }
    }

    console.log(errors);
    return fail(422, { errors: errors });
  }
};
