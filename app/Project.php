<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    public $timestamps = false;

    public function toArray()
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'thumbnail' => [
                'src' => $this->thumbnail,
                'width' => $this->thumbnail_width,
                'height' => $this->thumbnail_height,
            ],
            'links' => [
                'main' => $this->link,
                'github' => $this->githubLink,
            ],
            'description' => $this->description,
        ];
    }
}
