/**
 * @typedef {Object} ConflictArticle
 * @property {string} [title]
 * @property {string} [meta]
 * @property {string} [intro]
 * @property {string} [situation]
 * @property {string[]} [causes]
 * @property {string[]} [mistakes]
 * @property {string} [strategy]
 * @property {string[]} [examples]
 * @property {string} [help]
 * @property {Array<{question: string, answer: string}>} [faqs]
 */

/**
 * @typedef {Object} ConflictRelated
 * @property {string} category
 * @property {string} slug
 */

/**
 * @typedef {Object} ConflictOneParty
 * @property {string} [preparation]
 * @property {Object} [scripts]
 * @property {string} [scripts.sanft]
 * @property {string} [scripts.direkt]
 * @property {string} [scripts.sachlich]
 * @property {string[]} [steps]
 * @property {Array<{trigger: string, reaction: string}>} [reactions]
 * @property {string} [boundary]
 */

/**
 * @typedef {Object} ConflictTwoParty
 * @property {string} [goal]
 * @property {string[]} [rules]
 * @property {string[]} [questions]
 * @property {string[]} [steps]
 * @property {string} [agreement]
 */

/**
 * @typedef {Object} NormalizedConflict
 * @property {string} slug
 * @property {string} title
 * @property {string} icon
 * @property {string} summary
 * @property {string} problem
 * @property {string[]} causes
 * @property {string} safety
 * @property {ConflictOneParty} one_party
 * @property {ConflictTwoParty} two_party
 * @property {string[]} dos
 * @property {string[]} donts
 * @property {string} next_step
 * @property {ConflictRelated[]} related
 * @property {ConflictArticle} article
 */

/**
 * @param {any} rawConflict
 * @param {string} categoryId
 * @returns {NormalizedConflict}
 */
export function normalizeConflict(rawConflict, categoryId) {
  const causes = rawConflict.causes || (rawConflict.why_happens ? [rawConflict.why_happens] : []);
  
  const related = (rawConflict.related || []).map(r => {
    if (typeof r === 'string') {
      return { category: categoryId, slug: r };
    }
    return r;
  });

  return {
    ...rawConflict,
    causes,
    safety: rawConflict.safety || '',
    one_party: {
      ...rawConflict.one_party,
      preparation: rawConflict.one_party?.preparation || '',
      scripts: rawConflict.one_party?.scripts || {
        sanft: '',
        direkt: rawConflict.one_party?.script || '',
        sachlich: ''
      },
      steps: rawConflict.one_party?.steps || [],
      reactions: rawConflict.one_party?.reactions || [],
      boundary: rawConflict.one_party?.boundary || '',
    },
    two_party: {
      ...rawConflict.two_party,
      goal: rawConflict.two_party?.goal || '',
      rules: rawConflict.two_party?.rules || [],
      questions: rawConflict.two_party?.questions || [],
      steps: rawConflict.two_party?.steps || [],
      agreement: rawConflict.two_party?.agreement || '',
    },
    dos: rawConflict.dos || [],
    donts: rawConflict.donts || [],
    next_step: rawConflict.next_step || '',
    related,
    article: rawConflict.article || {}
  };
}
