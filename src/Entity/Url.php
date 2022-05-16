<?php

namespace App\Entity;

use App\Repository\UrlRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=UrlRepository::class)
 */
class Url
{
    /**
     * @ORM\Id
     * @ORM\GeneratedValue
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $hash;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $link;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $longUrl;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $domain;

    /**
     * @ORM\Column(type="datetime")
     */
    private $createdAt;

    /**
     * @ORM\ManyToOne(targetEntity=User::class, inversedBy="urls")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity=UrlStatistic::class, mappedBy="url", orphanRemoval=true)
     */
    private $statistics;

    public function __construct()
    {
        $this->statistics = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getHash(): ?string
    {
        return $this->hash;
    }

    public function setHash(string $hash): self
    {
        $this->hash = $hash;

        return $this;
    }

    public function getLink(): ?string
    {
        return $this->link;
    }

    public function setLink(string $link): self
    {
        $this->link = $link;

        return $this;
    }

    public function getLongUrl(): ?string
    {
        return $this->longUrl;
    }

    public function setLongUrl(string $longUrl): self
    {
        $this->longUrl = $longUrl;

        return $this;
    }

    public function getDomain(): ?string
    {
        return $this->domain;
    }

    public function setDomain(string $domain): self
    {
        $this->domain = $domain;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|UrlStatistic[]
     */
    public function getStatistics(): Collection
    {
        return $this->statistics;
    }

    public function addStatistic(UrlStatistic $statistic): self
    {
        if (!$this->statistics->contains($statistic)) {
            $this->statistics[] = $statistic;
            $statistic->setUrl($this);
        }

        return $this;
    }

    public function removeStatistic(UrlStatistic $statistic): self
    {
        if ($this->statistics->removeElement($statistic)) {
            // set the owning side to null (unless already changed)
            if ($statistic->getUrl() === $this) {
                $statistic->setUrl(null);
            }
        }

        return $this;
    }

    public function getAllClicks(): int
    {
        $clicks = 0;

        foreach ($this->statistics as $statistic) {
            $clicks += $statistic->getClicks();
        }

        return $clicks;
    }
}
