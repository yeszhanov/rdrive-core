<?php

namespace Rocketfirm\Rdrive\Models;

use Rocketfirm\Rdrive\Scopes\FilterScope;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;

/**
 * Rocketfirm\Rdrive\Models\RdriveBaseModel
 *
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\RdriveBaseModel newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\RdriveBaseModel newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|\Rocketfirm\Rdrive\Models\RdriveBaseModel query()
 * @mixin \Eloquent
 */
class RdriveBaseModel extends Model
{
    public $schemaName;

    public static $translatableRelations;

    public $sluggable;

    public function __construct(array $attributes = [])
    {
        parent::__construct($attributes);

        $this->schemaName = "{$this->getTable()}.{$this->getTable()}";

        if (isset($this->attributeLabels) && !empty($this->attributeLabels)) {
            foreach ($this->attributeLabels as $key => $value) {
                $this->attributeLabels[$key]['label'] = "{$this->getTable()}.{$key}";
            }
        }
    }

    protected static function boot()
    {
        parent::boot();

        static::addGlobalScope(new FilterScope());
    }

    /**
     * Scope a query to only include active items.
     *
     * @param  \Illuminate\Database\Eloquent\Builder $query
     * @return \Illuminate\Database\Eloquent\Builder
     */
    public function scopeActive(Builder $query)
    {
        return $query->where('is_active', true);
    }
}
